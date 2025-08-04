import mongoose, {Schema} from "mongoose";

interface MyData{
    title: string;
    description: string;
}

const MyDataSchema = new Schema<MyData>({
    title: {type: String, required: true},
    description: {type: String, required: true},
});

const TopicData = mongoose.model<MyData>("TopicData", MyDataSchema);

export default TopicData;