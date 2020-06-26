let salat = [
  { id: 1, names: { fr: "Feguig", ar: "\u0641\u0643\u064a\u0643" } },
  { id: 2, names: { fr: "Oujda", ar: "\u0648\u062c\u062f\u0629" } },
  {
    id: 3,
    names: { fr: "Bouaarfa", ar: "\u0628\u0648\u0639\u0631\u0641\u0629" },
  },
  { id: 4, names: { fr: "Jrada", ar: "\u062c\u0631\u0627\u062f\u0629" } },
  { id: 5, names: { fr: "Berkane", ar: "\u0628\u0631\u0643\u0627\u0646" } },
  {
    id: 6,
    names: {
      fr: "Ain Chair",
      ar: "\u0639\u064a\u0646 \u0627\u0644\u0634\u0639\u064a\u0631",
    },
  },
  {
    id: 7,
    names: { fr: "Taourirt", ar: "\u062a\u0627\u0648\u0631\u064a\u0631\u062a" },
  },
  {
    id: 8,
    names: { fr: "Nador", ar: "\u0627\u0644\u0646\u0627\u0638\u0648\u0631" },
  },
  {
    id: 9,
    names: { fr: "Melilla", ar: "\u0645\u0644\u064a\u0644\u064a\u0629" },
  },
  {
    id: 10,
    names: { fr: "Bouanane", ar: "\u0628\u0648\u0639\u0646\u0627\u0646" },
  },
  { id: 11, names: { fr: "Guersif", ar: "\u0643\u0631\u0633\u064a\u0641" } },
  {
    id: 12,
    names: { fr: "Boutagit", ar: "\u0628\u0648\u062a\u0627\u062c\u064a\u062a" },
  },
  {
    id: 13,
    names: { fr: "Tandit", ar: "\u062a\u0627\u0646\u062f\u064a\u062a" },
  },
  { id: 14, names: { fr: "Aknoul", ar: "\u0623\u0643\u0646\u0648\u0644" } },
  {
    id: 15,
    names: {
      fr: "El Hoceima",
      ar: "\u0627\u0644\u062d\u0633\u064a\u0645\u0629",
    },
  },
  { id: 16, names: { fr: "Missour", ar: "\u0645\u064a\u0633\u0648\u0631" } },
  { id: 17, names: { fr: "Taza", ar: "\u062a\u0627\u0632\u0629" } },
  { id: 18, names: { fr: "Bourd", ar: "\u0628\u0648\u0631\u062f" } },
  { id: 19, names: { fr: "Arfoud", ar: "\u0623\u0631\u0641\u0648\u062f" } },
  {
    id: 20,
    names: {
      fr: "Rissani",
      ar: "\u0627\u0644\u0631\u064a\u0635\u0627\u0646\u064a",
    },
  },
  {
    id: 21,
    names: {
      fr: "Oued Amlil",
      ar: "\u0648\u0627\u062f \u0623\u0645\u0644\u064a\u0644",
    },
  },
  { id: 22, names: { fr: "Tehla", ar: "\u062a\u0627\u0647\u0644\u0629" } },
  {
    id: 23,
    names: {
      fr: "Errachidia",
      ar: "\u0627\u0644\u0631\u0627\u0634\u062f\u064a\u0629",
    },
  },
  { id: 24, names: { fr: "Rich", ar: "\u0627\u0644\u0631\u064a\u0634" } },
  {
    id: 25,
    names: {
      fr: "Menzal Beni Yazgha",
      ar:
        "\u0627\u0644\u0645\u0646\u0632\u0644 \u0628\u0646\u064a \u064a\u0627\u0632\u063a\u0629",
    },
  },
  {
    id: 26,
    names: { fr: "Taounat", ar: "\u062a\u0627\u0648\u0646\u0627\u062a" },
  },
  { id: 27, names: { fr: "Tissa", ar: "\u062a\u064a\u0633\u0629" } },
  {
    id: 28,
    names: { fr: "Boulemane", ar: "\u0628\u0648\u0644\u0645\u0627\u0646" },
  },
  { id: 29, names: { fr: "Midelet", ar: "\u0645\u064a\u062f\u0644\u062a" } },
  { id: 30, names: { fr: "Sefrou", ar: "\u0635\u0641\u0631\u0648" } },
  {
    id: 31,
    names: { fr: "Guelmima", ar: "\u0643\u0644\u0645\u064a\u0645\u0629" },
  },
  { id: 32, names: { fr: "Fes", ar: "\u0641\u0627\u0633" } },
  {
    id: 33,
    names: {
      fr: "Imouzar Kandar",
      ar: "\u0625\u0645\u0648\u0632\u0627\u0631 \u0643\u0646\u062f\u0631",
    },
  },
  {
    id: 34,
    names: { fr: "Tinjdad", ar: "\u062a\u0646\u062c\u062f\u0627\u062f" },
  },
  { id: 35, names: { fr: "Ifrane", ar: "\u0625\u0641\u0631\u0627\u0646" } },
  {
    id: 36,
    names: {
      fr: "Moulay Yaacoub",
      ar: "\u0645\u0648\u0644\u0627\u064a \u064a\u0639\u0642\u0648\u0628",
    },
  },
  { id: 37, names: { fr: "Azrou", ar: "\u0622\u0632\u0631\u0648" } },
  {
    id: 38,
    names: { fr: "Chefchaouan", ar: "\u0634\u0641\u0634\u0627\u0648\u0646" },
  },
  { id: 39, names: { fr: "Sebta", ar: "\u0633\u0628\u062a\u0629" } },
  { id: 40, names: { fr: "Tetouan", ar: "\u062a\u0637\u0648\u0627\u0646" } },
  {
    id: 41,
    names: { fr: "El Hajeb", ar: "\u0627\u0644\u062d\u0627\u062c\u0628" },
  },
  { id: 42, names: { fr: "Zerhoune", ar: "\u0632\u0631\u0647\u0648\u0646" } },
  { id: 43, names: { fr: "Meknes", ar: "\u0645\u0643\u0646\u0627\u0633" } },
  { id: 44, names: { fr: "Ouazzane", ar: "\u0648\u0632\u0627\u0646" } },
  {
    id: 45,
    names: { fr: "Khenifra", ar: "\u062e\u0646\u064a\u0641\u0631\u0629" },
  },
  {
    id: 46,
    names: {
      fr: "Sidi Kacem",
      ar: "\u0633\u064a\u062f\u064a \u0642\u0627\u0633\u0645",
    },
  },
  {
    id: 47,
    names: {
      fr: "Tizi Ousli",
      ar: "\u062a\u064a\u0632\u064a \u0648\u0633\u0644\u064a",
    },
  },
  { id: 48, names: { fr: "Tanger", ar: "\u0637\u0646\u062c\u0629" } },
  {
    id: 49,
    names: { fr: "Zagoura", ar: "\u0632\u0627\u0643\u0648\u0631\u0629" },
  },
  {
    id: 50,
    names: {
      fr: "Laksar Lakbire",
      ar: "\u0627\u0644\u0642\u0635\u0631 \u0627\u0644\u0643\u0628\u064a\u0631",
    },
  },
  {
    id: 51,
    names: { fr: "Arbaoua", ar: "\u0639\u0631\u0628\u0627\u0648\u0629" },
  },
  {
    id: 52,
    names: {
      fr: "Sidi Slimane",
      ar: "\u0633\u064a\u062f\u064a \u0633\u0644\u064a\u0645\u0627\u0646",
    },
  },
  {
    id: 53,
    names: {
      fr: "Souq Arbia Gharb",
      ar:
        "\u0633\u0648\u0642 \u0623\u0631\u0628\u0639\u0627\u0621 \u0627\u0644\u063a\u0631\u0628",
    },
  },
  { id: 54, names: { fr: "Assila", ar: "\u0623\u0635\u064a\u0644\u0627" } },
  {
    id: 55,
    names: {
      fr: "Khemissat",
      ar: "\u0627\u0644\u062e\u0645\u064a\u0633\u0627\u062a",
    },
  },
  {
    id: 56,
    names: {
      fr: "Kalaa Megouna ",
      ar: "\u0642\u0644\u0639\u0629 \u0645\u0643\u0648\u0646\u0629",
    },
  },
  {
    id: 57,
    names: { fr: "Araich", ar: "\u0627\u0644\u0639\u0631\u0627\u0626\u0634" },
  },
  {
    id: 58,
    names: {
      fr: "Moulay Bouaaza",
      ar: "\u0645\u0648\u0644\u0627\u064a \u0628\u0648\u0639\u0632\u0629",
    },
  },
  {
    id: 59,
    names: {
      fr: "Kesbat Tadla",
      ar: "\u0642\u0635\u0628\u0629 \u062a\u0627\u062f\u0644",
    },
  },
  {
    id: 60,
    names: {
      fr: "Sidi Yahya Lgharb",
      ar:
        "\u0633\u064a\u062f\u064a \u064a\u062d\u064a\u0649 \u0627\u0644\u063a\u0631\u0628",
    },
  },
  { id: 61, names: { fr: "Tiflet", ar: "\u062a\u064a\u0641\u0644\u062a" } },
  {
    id: 62,
    names: {
      fr: "Beni Mellal",
      ar: "\u0628\u0646\u064a \u0645\u0644\u0627\u0644",
    },
  },
  {
    id: 63,
    names: { fr: "Meskoura", ar: "\u0647\u0633\u0643\u0648\u0631\u0629" },
  },
  { id: 64, names: { fr: "Oued Zem", ar: "\u0648\u0627\u062f \u0632\u0645" } },
  {
    id: 65,
    names: { fr: "Azilal", ar: "\u0623\u0632\u064a\u0644\u0627\u0644" },
  },
  {
    id: 67,
    names: {
      fr: "Kenitra",
      ar: "\u0627\u0644\u0642\u0646\u064a\u0637\u0631\u0629",
    },
  },
  {
    id: 68,
    names: { fr: "Remani", ar: "\u0627\u0644\u0631\u0645\u0627\u0646\u064a" },
  },
  {
    id: 69,
    names: {
      fr: "Rabat-Sale",
      ar: "\u0627\u0644\u0631\u0628\u0627\u0637 \u0648 \u0633\u0644\u0627",
    },
  },
  {
    id: 70,
    names: { fr: "Khouribga", ar: "\u062e\u0631\u064a\u0628\u0643\u0629" },
  },
  {
    id: 71,
    names: {
      fr: "Ouarzazate",
      ar: "\u0648\u0631\u0632\u0627\u0632\u0627\u062a",
    },
  },
  { id: 72, names: { fr: "Demnat", ar: "\u062f\u0645\u0646\u0627\u062a" } },
  {
    id: 73,
    names: {
      fr: "Ben Slimane",
      ar: "\u0628\u0646 \u0633\u0644\u064a\u0645\u0627\u0646",
    },
  },
  {
    id: 74,
    names: { fr: "Bouznika", ar: "\u0628\u0648\u0632\u0646\u064a\u0642\u0629" },
  },
  {
    id: 75,
    names: { fr: "Lgara", ar: "\u0627\u0644\u0643\u0627\u0631\u0629" },
  },
  {
    id: 76,
    names: {
      fr: "Mohammedia",
      ar: "\u0627\u0644\u0645\u062d\u0645\u062f\u064a\u0629",
    },
  },
  {
    id: 77,
    names: {
      fr: "Kelaat Esraghna",
      ar:
        "\u0642\u0644\u0639\u0629 \u0627\u0644\u0633\u0631\u0627\u063a\u0646\u0629",
    },
  },
  { id: 78, names: { fr: "Berrchid", ar: "\u0628\u0631\u0634\u064a\u062f" } },
  { id: 79, names: { fr: "Settat", ar: "\u0633\u0637\u0627\u062a" } },
  {
    id: 80,
    names: {
      fr: "Casablanca",
      ar:
        "\u0627\u0644\u062f\u0627\u0631 \u0627\u0644\u0628\u064a\u0636\u0627\u0621",
    },
  },
  {
    id: 81,
    names: { fr: "Talouine", ar: "\u062a\u0627\u0644\u0648\u064a\u0646" },
  },
  {
    id: 82,
    names: { fr: "Bengrire", ar: "\u0628\u0646\u0643\u0631\u064a\u0631" },
  },
  { id: 83, names: { fr: "Tata", ar: "\u0637\u0627\u0637\u0627" } },
  { id: 84, names: { fr: "Marrakech", ar: "\u0645\u0631\u0627\u0643\u0634" } },
  { id: 85, names: { fr: "Akka", ar: "\u0623\u0642\u0627" } },
  { id: 86, names: { fr: "Azemour", ar: "\u0622\u0632\u0645\u0648\u0631" } },
  { id: 87, names: { fr: "Aghram", ar: "\u0627\u063a\u0631\u0627\u0645" } },
  {
    id: 88,
    names: {
      fr: "El Jadida",
      ar: "\u0627\u0644\u062c\u062f\u064a\u062f\u0629",
    },
  },
  {
    id: 89,
    names: {
      fr: "Youssoufia",
      ar: "\u0627\u0644\u064a\u0648\u0633\u0641\u0628\u0629",
    },
  },
  {
    id: 90,
    names: {
      fr: "Taroudant",
      ar: "\u062a\u0627\u0631\u0648\u062f\u0627\u0646\u062a",
    },
  },
  {
    id: 91,
    names: { fr: "Tafraout", ar: "\u062a\u0627\u0641\u0631\u0627\u0648\u062a" },
  },
  { id: 92, names: { fr: "Safi", ar: "\u0622\u0633\u0641\u064a" } },
  { id: 93, names: { fr: "Zag", ar: "\u0627\u0644\u0632\u0627\u0643" } },
  { id: 94, names: { fr: "Assa", ar: "\u0623\u0633\u0627" } },
  {
    id: 95,
    names: { fr: "Agadir", ar: "\u0623\u0643\u0627\u062f\u064a\u0631" },
  },
  { id: 96, names: { fr: "Tiznit", ar: "\u062a\u0632\u0646\u064a\u062a" } },
  {
    id: 97,
    names: {
      fr: "Essaouira",
      ar: "\u0627\u0644\u0635\u0648\u064a\u0631\u0629",
    },
  },
  { id: 98, names: { fr: "Guelmim", ar: "\u0643\u0644\u0645\u064a\u0645" } },
  {
    id: 99,
    names: {
      fr: "Sidi Ifni",
      ar: "\u0633\u064a\u062f\u064a \u0625\u0641\u0646\u064a",
    },
  },
  {
    id: 100,
    names: { fr: "Tantan", ar: "\u0637\u0627\u0646\u0637\u0627\u0646" },
  },
  {
    id: 101,
    names: { fr: "Smara", ar: "\u0627\u0644\u0633\u0645\u0627\u0631\u0629" },
  },
  {
    id: 102,
    names: { fr: "Terfaya", ar: "\u0637\u0631\u0641\u0627\u064a\u0629" },
  },
  {
    id: 103,
    names: { fr: "Laayoune", ar: "\u0627\u0644\u0639\u064a\u0648\u0646" },
  },
  {
    id: 104,
    names: { fr: "Boujdour", ar: "\u0628\u0648\u062c\u062f\u0648\u0631" },
  },
  {
    id: 105,
    names: { fr: "Dakhla", ar: "\u0627\u0644\u062f\u0627\u062e\u0644\u0629" },
  },
  {
    id: 106,
    names: { fr: "Lagouira", ar: "\u0627\u0644\u0643\u0648\u064a\u0631\u0629" },
  },
  { id: 107, names: { fr: "Alnif", ar: "\u0623\u0644\u0646\u064a\u0641" } },
  {
    id: 108,
    names: {
      fr: "Boujad",
      ar: "\u0627\u0628\u064a \u0627\u0644\u062c\u0639\u062f",
    },
  },
  { id: 109, names: { fr: "Aousserd", ar: "\u0623\u0648\u0633\u0631\u062f" } },
  { id: 110, names: { fr: "Tinghir", ar: "\u062a\u0646\u063a\u064a\u0631" } },
  {
    id: 111,
    names: {
      fr: "Chtouka Ait Baha",
      ar:
        "\u0627\u0634\u062a\u0648\u0643\u0629 \u0622\u064a\u062a \u0628\u0627\u0647",
    },
  },
  {
    id: 112,
    names: { fr: "Fnideq", ar: "\u0627\u0644\u0641\u0646\u064a\u062f\u0642" },
  },
  {
    id: 113,
    names: {
      fr: "Skhour Rehamna",
      ar:
        "\u0635\u062e\u0648\u0631\u0627\u0644\u0631\u062d\u0627\u0645\u0646\u0629",
    },
  },
  {
    id: 116,
    names: {
      fr: "Fquih Ben Salah",
      ar:
        "\u0627\u0644\u0641\u0642\u064a\u0647 \u0628\u0646 \u0635\u0627\u0644\u062d",
    },
  },
];
module.exports = salat;
