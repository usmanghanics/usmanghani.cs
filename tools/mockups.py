"""Builds the app showcase images in public/img/work/ from real app screens.

Each image: a flat brand-colour background with three phones (real screens,
clean phone frame, small punch hole), the middle one raised. No text, no
gradients. Run: ~/.cache/img-venv/bin/python tools/mockups.py
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter

HOME = Path.home()
OUT = Path(__file__).resolve().parent.parent / 'public/img/work'
SNAP = HOME / 'Desktop/SnapCut_Store/2_App_screenshots_real'
BIZ = HOME / 'Desktop/BizCare-Website/bizcare-web/src/assets/apps'
MADA = HOME / 'AndroidStudioProjects/madadgar_kisan/dist/AppStore-Screenshots-iOS-1.0.0-17/iPhone'

SETS = {
    'snapcut': ('#29aae2', [SNAP / '07_captions.png', SNAP / '01_editor.png', SNAP / '04_split_screen.png']),
    'makki-autocare': ('#161616', [BIZ / 'makki-autocare/car.png', BIZ / 'makki-autocare/home.png', BIZ / 'makki-autocare/vehicles.png']),
    'madadgar-kisan': ('#5f921b', [MADA / '02-shop.png', MADA / '01-home.png', MADA / '06-home-urdu.png']),
    'bizcare': ('#017e84', [BIZ / 'bizcare/reports.png', BIZ / 'bizcare/dashboard.png', BIZ / 'bizcare/transactions.png']),
}

S = 2  # draw at 2x, then scale down for clean edges
W, H = 1600, 1000


def phone(screen_path, width, dark_bg):
    scr = Image.open(screen_path).convert('RGB')
    w = width * S
    bezel = round(w * 0.032)
    sw = w - 2 * bezel
    sh = round(sw * scr.height / scr.width)
    h = sh + 2 * bezel
    r_out = round(w * 0.13)
    r_in = r_out - bezel
    body = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(body)
    rim = (70, 70, 76, 255) if dark_bg else (32, 32, 36, 255)
    d.rounded_rectangle((0, 0, w - 1, h - 1), r_out, fill=rim)
    d.rounded_rectangle((3 * S, 3 * S, w - 1 - 3 * S, h - 1 - 3 * S), r_out - 3 * S, fill=(12, 12, 14, 255))
    scr = scr.resize((sw, sh), Image.LANCZOS)
    mask = Image.new('L', (sw, sh), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, sw - 1, sh - 1), r_in, fill=255)
    body.paste(scr, (bezel, bezel), mask)
    hole = round(w * 0.034)
    cx, cy = w // 2, bezel + round(w * 0.045)
    d.ellipse((cx - hole // 2, cy - hole // 2, cx + hole // 2, cy + hole // 2), fill=(8, 8, 10, 255))
    return body


def compose(name, bg, screens):
    canvas = Image.new('RGBA', (W * S, H * S), bg)
    dark = sum(int(bg[i:i + 2], 16) for i in (1, 3, 5)) < 200
    sizes = [370, 420, 370]
    tops = [210, 120, 210]
    gap = 46
    total = sum(sizes) + 2 * gap
    x = (W - total) // 2
    order = [0, 2, 1]  # draw the sides first, the middle on top
    xs = []
    for s in sizes:
        xs.append(x)
        x += s + gap
    for i in order:
        p = phone(screens[i], sizes[i], dark)
        shadow = Image.new('RGBA', canvas.size, (0, 0, 0, 0))
        sh_mask = Image.new('L', p.size, 0)
        sh_mask.paste(p.split()[3])
        layer = Image.new('RGBA', p.size, (0, 0, 0, 70 if not dark else 120))
        shadow.paste(layer, (xs[i] * S, tops[i] * S + 24 * S), sh_mask)
        shadow = shadow.filter(ImageFilter.GaussianBlur(28 * S))
        canvas = Image.alpha_composite(canvas, shadow)
        canvas.alpha_composite(p, (xs[i] * S, tops[i] * S))
    out = canvas.convert('RGB').resize((W, H), Image.LANCZOS)
    OUT.mkdir(parents=True, exist_ok=True)
    out.save(OUT / f'{name}.webp', 'WEBP', quality=86, method=6)
    print('wrote', OUT / f'{name}.webp')


for name, (bg, screens) in SETS.items():
    compose(name, bg, screens)
