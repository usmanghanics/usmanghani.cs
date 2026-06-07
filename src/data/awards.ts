export type Award = {
  place: string;
  title: string;
  event: string;
  organization: string;
  tone: "blue" | "red" | "green";
};

export const awards: Award[] = [
  {
    place: "1st",
    title: "Competitive Programming",
    event: "CodeX 3.0",
    organization: "Namal University, Mianwali",
    tone: "blue",
  },
  {
    place: "3rd",
    title: "On Spot Programming",
    event: "Visio Spark",
    organization: "COMSATS University, Vehari",
    tone: "green",
  },
  {
    place: "2nd",
    title: "Matriculation",
    event: "BISE Lahore",
    organization: "Punjab Daanish Schools, Hasilpur",
    tone: "red",
  },
];
