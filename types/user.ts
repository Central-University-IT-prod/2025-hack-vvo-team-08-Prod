import {modelOptions, prop} from "@typegoose/typegoose";

export type Sex = "male" | "female"

@modelOptions({
	schemaOptions: {collection: "users", timestamps: true, _id: false, overwriteModels: true},
	options: {customName: "User"}
})
export class User {
	@prop({required: true})
	public _id!: string

	@prop({required: true, unique: true, trim: true, maxlength: 30, minlength: 1})
	public name!: string

	@prop({required: true, unique: true, trim: true})
	public email!: string

	@prop({required: true, trim: true})
	public password!: string

	@prop({required: true, trim: true})
	public fullname!: string

	@prop({required: true})
	public sex!: Sex

	@prop({required: true, default: false})
	public isAdmin!: boolean
}