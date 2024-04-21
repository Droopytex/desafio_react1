import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

const Tags = ({ colorBadge, textBadge }) => {
  return (
    <Stack direction="horizontal align-center" gap={2}>
      <Badge bg={colorBadge}>{textBadge}</Badge>
    </Stack>
  );
};

export default Tags;
