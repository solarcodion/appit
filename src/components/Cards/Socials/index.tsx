import { face, group, message, share } from "../../../assets/image";
import Card from "./Card";

const SocialCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
      <Card
        icon={message}
        title="Instant Messaging"
        desc="Chat seamlessly with friends and communities."
      />
      <Card
        icon={share}
        title="Story Sharing"
        desc="Chat seamlessly with friends and communities."
      />
      <Card
        icon={face}
        title="Customizable Profiles"
        desc="Personalize your profile with themes and layouts."
      />
      <Card
        icon={group}
        title="Community Groups"
        desc="Join or create groups around shared interests."
      />
    </div>
  );
};

export default SocialCards;
