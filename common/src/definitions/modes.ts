import { ReferenceTo } from "../utils/objectDefinitions";
import { ScopeDefinition } from "./scopes";

export type ColorKeys = "grass" | "water" | "border" | "beach" | "riverBank" | "trail" | "gas" | "void";

export interface ModeDefinition {
    readonly colors: Record<ColorKeys, string>
    readonly specialMenuMusic?: boolean
    readonly spriteSheets: string[],
    readonly ambience?: string
    readonly specialSounds?: string[]
    readonly defaultScope?: ReferenceTo<ScopeDefinition>
    readonly darkShaders?: boolean
    // will be multiplied by the bullet trail color
    readonly bulletTrailAdjust?: string
    readonly particleEffects?: {
        readonly frames: string | string[]
        readonly tint?: number
    }
    readonly buttonCss?: {
        icon: string,
        color: string,
        shadowColor: string
    }
}

export type Mode = keyof typeof Modes;

export const Modes = {
    normal: {
        colors: {
            grass: "hsl(95, 41%, 38%)",
            water: "hsl(211, 63%, 42%)",
            border: "hsl(211, 63%, 30%)",
            beach: "hsl(40, 39%, 55%)",
            riverBank: "hsl(34, 41%, 32%)",
            trail: "hsl(35, 50%, 40%)",
            gas: "hsla(17, 100%, 50%, 0.55)",
            void: "hsl(25, 80%, 6%)"
        },
        spriteSheets: ["shared", "normal"]
    },
    fall: {
        colors: {
            grass: "hsl(62, 42%, 32%)",
            water: "hsl(211, 63%, 42%)",
            border: "hsl(211, 63%, 30%)",
            beach: "hsl(40, 39%, 55%)",
            riverBank: "hsl(33, 50%, 30%)",
            trail: "hsl(35, 50%, 40%)",
            gas: "hsla(17, 100%, 50%, 0.55)",
            void: "hsl(25, 80%, 6%)"
        },
        ambience: "wind_ambience",
        defaultScope: "2x_scope",
        particleEffects: {
            frames: ["leaf_particle_1", "leaf_particle_2", "leaf_particle_3"]
        },
        spriteSheets: ["shared", "fall"],
        buttonCss: {
            color: "#72742f",
            shadowColor: "#535421",
            icon: "./img/game/fall/obstacles/mini_plumpkin.svg"
        }
    },
    halloween: {
        colors: {
            grass: "hsl(65, 100%, 12%)",
            water: "hsl(4, 100%, 14%)",
            border: "hsl(4, 90%, 12%)",
            beach: "hsl(33, 77%, 21%)",
            riverBank: "hsl(33, 50%, 25%)",
            trail: "hsl(35, 50%, 20%)",
            gas: "hsla(17, 100%, 50%, 0.55)",
            void: "hsl(25, 80%, 6%)"
        },
        defaultScope: "2x_scope",
        specialMenuMusic: true,
        darkShaders: true,
        spriteSheets: ["shared", "fall", "halloween"]
    },
    winter: {
        colors: {
            grass: "hsl(210, 18%, 82%)",
            water: "hsl(211, 63%, 42%)",
            border: "hsl(208, 94%, 45%)",
            beach: "hsl(210, 18%, 75%)",
            riverBank: "hsl(210, 18%, 70%)",
            trail: "hsl(35, 50%, 40%)",
            gas: "hsla(17, 100%, 50%, 0.55)",
            void: "hsl(25, 80%, 6%)"
        },
        specialMenuMusic: true,
        specialSounds: [
            "airdrop_plane"
        ],
        bulletTrailAdjust: "hsl(0, 50%, 80%)",
        spriteSheets: ["shared", "winter"]
    }
} satisfies Record<string, ModeDefinition>;
