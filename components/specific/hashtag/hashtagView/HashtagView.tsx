interface HashtagViewProps {
  /**해시태그 텍스트 */
  text: string;
}

const HashtagView = ({ text }: HashtagViewProps) => {
  return (
    <div className="bg-bg-white inline-flex px-3 py-1 rounded-full text-gray-900 max-w-24">
      <span className="select-none truncate">#{text}</span>
    </div>
  );
};

export default HashtagView;
