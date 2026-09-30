export type Event = {
  id: number;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  description: string;
  emoji: string;
  capacity: number;
  registered: number;
};

export const events: Event[] = [
  {
    id: 1,
    title: "Conferencia de Inteligencia Artificial",
    category: "Académico",
    date: "30 de septiembre de 2026",
    time: "6:00 PM",
    location: "Auditorio Principal",
    description:
      "Conferencia sobre las nuevas aplicaciones de la inteligencia artificial en la educación y el desarrollo profesional.",
    emoji: "🤖",
    capacity: 300,
    registered: 247,
  },
  {
    id: 2,
    title: "Feria de Emprendimiento Universitario",
    category: "Emprendimiento",
    date: "2 de octubre de 2026",
    time: "9:00 AM",
    location: "Plaza Universitaria",
    description:
      "Espacio para conocer proyectos, ideas y emprendimientos desarrollados por estudiantes.",
    emoji: "💡",
    capacity: 500,
    registered: 382,
  },
  {
    id: 3,
    title: "Torneo Universitario",
    category: "Deportes",
    date: "5 de octubre de 2026",
    time: "3:00 PM",
    location: "Complejo Deportivo",
    description:
      "Participa en las actividades deportivas y representa a tu programa académico.",
    emoji: "🏆",
    capacity: 200,
    registered: 156,
  },
  {
    id: 4,
    title: "Festival Cultural Universitario",
    category: "Cultural",
    date: "8 de octubre de 2026",
    time: "4:00 PM",
    location: "Plaza Cultural",
    description:
      "Una jornada dedicada a la música, danza, arte y expresión cultural universitaria.",
    emoji: "🎭",
    capacity: 600,
    registered: 421,
  },
  {
    id: 5,
    title: "Taller de Desarrollo Web",
    category: "Académico",
    date: "10 de octubre de 2026",
    time: "2:00 PM",
    location: "Laboratorio 204",
    description:
      "Taller práctico sobre desarrollo de aplicaciones web modernas.",
    emoji: "💻",
    capacity: 80,
    registered: 64,
  },
  {
    id: 6,
    title: "Encuentro de Proyectos de Ingeniería",
    category: "Académico",
    date: "15 de octubre de 2026",
    time: "10:00 AM",
    location: "Bloque de Ingeniería",
    description:
      "Presentación de proyectos desarrollados por estudiantes de diferentes programas de ingeniería.",
    emoji: "⚙️",
    capacity: 250,
    registered: 189,
  },
];

export async function getEvents(): Promise<Event[]> {
  return events;
}

export async function getEventById(
  id: number
): Promise<Event | undefined> {
  return events.find((event) => event.id === id);
}