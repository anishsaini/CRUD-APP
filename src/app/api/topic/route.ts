import connectToMongoDB from "../../../../libs/mongodb";
import { NextResponse, NextRequest } from "next/server";
import TopicData from "../../../../models/topic";

export async function POST(request: NextRequest){
    const data = await request.json();
    try{
        await connectToMongoDB();
        await TopicData.create({title: data.title, discription: data.description});
        return NextResponse.json({message: "Topic Added Successfully"}, {status: 201});

    }
    catch(error){
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        return NextResponse.json({error: errorMessage}, {status: 500});
    }
}


export async function DELETE(request: NextRequest, { params }: {params: {id: string}}){
    try {
        await connectToMongoDB();
        await TopicData.findByIdAndDelete(params.id);
        return NextResponse.json({message: "Topic deleted successfully"}, {status: 200});
    } catch (error) {
        return NextResponse.json({error: "Failed to delete topic"}, {status: 500});
    }
}