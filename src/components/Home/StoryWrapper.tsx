import { getAllPostsFromWordPress } from "@/lib";
import { Slider } from "..";

export default async function StoryWrapper() {
  const story = await getAllPostsFromWordPress();
  // console.log(story, "story");

  return <Slider story={story} />
}
