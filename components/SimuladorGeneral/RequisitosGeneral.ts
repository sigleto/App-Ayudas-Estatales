type Ayuda = {
  name: string;
  simulador: string[];
};

type Categoria = {
  category: string;
  ayudas: Ayuda[];
};

export const categories: Categoria[] = [
  {
    category: "",
    ayudas: [
      {
        name: "",
        simulador: ["a"],
      },
    ],
  },
  {
    category: "Ayudas educativas",
    ayudas: [
      {
        name: "",
        simulador: ["SimuladorBecaGeneral"],
      },
      {
        name: "Beca general",
        simulador: ["SimuladorBecaGeneral"],
      },
      {
        name: "Beca por apoyo educativo especial",
        simulador: [
          "SimuladorBecaApoyoEducativo"
        ],
      },
      {
        name: "Beca por residencia",
        simulador: [
          "SimuladorBecaResidencia",
        ],
      },
    ],
  },
  {
    category: "Ayudas sociales",
    ayudas: [
      {
        name: "",
        simulador: [""],
      },
      {
        name: "Ingreso Mínimo Vital",
        simulador: [
          "SimuladorIngresoMinimoVital",
        ],
      },
      {
        name: "Bono alquiler joven",
        simulador: [
          "SimuladorBonoJoven",
        ],
      },
      {
        name: "Ley de dependencia",
        simulador: [
          "SimuladorLeyDeDependencia",
        ],
      },
    ],
  },
  {
    category: "Ayudas familiares",
    ayudas: [
      {
        name: "",
        simulador: [""],
      },
      {
        name: "Ayuda por nacimiento o adopción",
        simulador: [
          "SimuladorAyudaNacimiento",
        ],
      },
      {
        name: "Prestación por hijos con discapacidad",
        simulador: [
          "SimuladorPrestacionHijoDiscapacidad",
        ],
      },
    ],
  },
  {
    category: "Ayudas de vivienda",
    ayudas: [
      {
        name: "",
        simulador: [""],
      },
      {
        name: "Ayuda al alquiler",
        simulador: [
          "SimuladorAyudasAlquiler",
        ],
      },
      {
        name: "Ayuda adquisición para jóvenes",
        simulador: [
          "SimuladorJovenesAquisicion",
        ],
      },
      {
        name: "Bono alquiler joven",
        simulador: [
          "SimuladorBonoJovenAlquiler",
        ],
      },
      {
        name: "Aval del 20% de la hipoteca",
        simulador: [
          "SimuladorAvalHipoteca",
        ],
      },
    ],
  },
  {
    category: "Ayudas para personas con discapacidad",
    ayudas: [
      {
        name: "",
        simulador: [""],
      },
      {
        name: "Pensión no contributiva",
        simulador: [
          "SimuladorPensionNoContributiva",
        ],
      },
      {
        name: "Subsidio de movilidad",
        simulador: [
          "SimuladorSubsidioMovilidad",
        ],
      },
      {
        name: "Asistencia Sanitaria",
        simulador: [
          "SimuladorAsistenciaSanitaria",
        ],
      },
    ],
  },
];
