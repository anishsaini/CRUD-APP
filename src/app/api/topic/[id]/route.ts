import TopicData from "../../../../../models/topic";
import connectToMongoDB from "../../../../../libs/mongodb";
import { NextResponse, NextRequest } from "next/server";

async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const data = await request.json();
    try {
        await connectToMongoDB();
        const topic = await TopicData.findByIdAndUpdate(params.id, { title: data.title, description: data.description }, { new: true });
        return NextResponse.json(topic);
    } catch (error) {
        return NextResponse.json({ error: "Failed to update topic" }, { status: 500 });
    }
}

export async function GET(request: NextRequest, { params }: {params: {id: string}}){
    try {
        await connectToMongoDB();
        const topic = await TopicData.findById(params.id);
        return NextResponse.json({message: "Topic deleted successfully"}, {status: 200});
    } catch (error) {
        return NextResponse.json({error: "Failed to delete topic"}, {status: 500});
    }
}