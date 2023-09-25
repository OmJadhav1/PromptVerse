import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
  try {
    // console.log("feed fetching start");
    await connectToDB();

    const prompts = await Prompt.find({}).populate("creator");
    // console.log(JSON.stringify(prompts));
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
