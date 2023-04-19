export type Urgencia = "pouco urgente" | "urgente" | "muito urgente";

export const rtFormatter = new Intl.RelativeTimeFormat("pt-BR");

export type Pedido = {
    prato: string,
    horario: Date,
    anotacoes?: string,
    urgencia: Urgencia,
};

export const urgenciaColor: Map<Urgencia, string> = new Map([
    ["pouco urgente", "green"],
    ["urgente", "yellow"],
    ["muito urgente", "red"],
]);

// lista de pedidos
export const pedidos: Pedido[] = [
    {
        prato: "Lasanha",
        horario: new Date("2023-04-15 23:21-03:00"),
        anotacoes: "sem cebola",
        urgencia: "pouco urgente",
    },
    {
        prato: "Macarrão",
        horario: new Date("2023-04-15 20:00-03:00"),
        urgencia: "urgente",
    },
    {
        prato: "Pizza",
        horario: new Date("2023-04-15 12:00-03:00"),
        anotacoes: "bacon extra",
        urgencia: "muito urgente",
    },
    {
        prato: "Hambúrguer",
        horario: new Date("2023-04-15 23:00-03:00"),
        urgencia: "pouco urgente",
    }
];
