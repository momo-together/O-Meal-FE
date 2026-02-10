import AddIcon from "@/assets/icons/add.svg";
import FloatingButton from "@/components/ui/button/floatingButton/FloatingButton";

export default function Home() {
  return (
    <div>
      <FloatingButton variant="primary" location="right" isDisabled={false}>
        <AddIcon />
      </FloatingButton>
    </div>
  );
}
