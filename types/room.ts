import { modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({
	schemaOptions: { collection: "rooms", timestamps: true, _id: false, overwriteModels: true },
	options: { customName: "Room" },
})
export class Room {
	@prop({ required: true })
	public _id!: string;

	@prop({ required: true, unique: true, trim: true, maxlength: 50, minlength: 1 })
	public name!: string;

	@prop({ required: true, trim: true, maxlength: 500 })
	public description!: string;

	@prop({ required: true, default: [] })
	public members!: string[];

	@prop({ required: true, min: 1 })
	public beds!: number;

	@prop({ required: true, default: false })
	public balcony!: boolean;

	@prop({ required: true, default: false })
	public shower!: boolean;

	@prop({ required: true, default: false })
	public kitchen!: boolean;
}
