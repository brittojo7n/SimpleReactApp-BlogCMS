const TagBadge = ({ tag, onClick }) => {
  return (
    <span 
      className="tag-badge"
      onClick={() => onClick(tag)}
    >
      {tag}
    </span>
  );
};

export default TagBadge;