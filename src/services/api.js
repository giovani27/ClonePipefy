export function loadLists() {
  return [
    {
      title: "Tarefas",
      creatable: true,
      cards: [
        {
          id: 1,
          content: "Estudar módulo 01 de NodeJS",
          labels: ["#7159c1"],
          user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
        },
        {
          id: 2,
          content: "Almoçar e escovar os dentes",
          labels: ["#7159c1"],
          user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
        },
        {
          id: 3,
          content: "Estudar módulo 03 de React Native",
          labels: ["#7159c1"],
          user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
        },
        {
          id: 4,
          content: 'Tomar café da tarde"',
          labels: ["#54e1f7"],
          user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
        },
        {
          id: 5,
          content: "ir ao mercado",
          labels: ["#54e1f7"],
          user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
        },
      ],
    },
    {
      title: "Fazendo",
      creatable: false,
      cards: [
        {
          id: 6,
          content: "Recriando clone do Pipefy",
          labels: [],
          user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
        },
      ],
    },
    {
      title: "Pausado",
      creatable: false,
      cards: [
        {
          id: 7,
          content: "Jogar bola com amigos",
          labels: ["#7159c1"],
          user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
        },
        {
          id: 8,
          content: "Dar comida pro cachorro",
          labels: ["#54e1f7"],
          user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png",
        },
        {
          id: 9,
          content: "Limpar o quintal",
          labels: [],
        },
      ],
    },
    {
      title: "Concluído",
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: "Tomar café da manha",
          labels: [],
        },
        {
          id: 12,
          content: "Arrumar a casa",
          labels: ["#54e1f7"],
        },
        {
          id: 13,
          content: 'Fazer almoço"',
          labels: ["#7159c1"],
        },
      ],
    },
  ];
}
