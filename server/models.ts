import {getModelForClass, type ReturnModelType} from '@typegoose/typegoose';
import {User} from "@/types/user";
import {Session} from "@/types/session";
import {MGConnect} from "./connect";
import {models} from "mongoose";
import {Room} from "@/types/room";

MGConnect()

export const roomModel = (models.Room as ReturnModelType<typeof Room>) || getModelForClass(Room);
export const userModel = (models.User as ReturnModelType<typeof User>) || getModelForClass(User);
const sessionModel = (models.Session as ReturnModelType<typeof Session>) || getModelForClass(Session);
