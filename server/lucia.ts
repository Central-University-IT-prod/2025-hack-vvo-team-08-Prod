import {Lucia} from "lucia";
import {adapter} from "./adapter";
import {User} from "@/types/user";
import {SESSION} from "@/const";

export const lucia = new Lucia(adapter, {
    sessionCookie: {
        name: SESSION,
        expires: false,
        attributes: {
            //secure: process.env.NODE_ENV === "production"
            secure: false
        }
    },
    getUserAttributes: user => user
});

declare module "lucia" {
    interface Register {
        Lucia: typeof lucia
        DatabaseUserAttributes: InstanceType<typeof User>
    }
}