import PropTypes from "prop-types";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./CardCategoria.css";

const CardCategoria = ({ categoria }) => {
  const { id, imageUrl, alt, categoria: titulo } = categoria;

  return (
    <Card
      sx={{
        maxWidth: 300,
        boxShadow: 5,
        margin: 2,
      }}
    >
      <CardMedia
        component="img"
        alt={alt}
        height="150"
        image={imageUrl}
        title={`Imagen ${id}`}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          <Link to={`/resultados/${titulo}`} className="no-underline">
            {titulo}
          </Link>
        </Typography>
        <Typography variant="body2" component="p"></Typography>
      </CardContent>
    </Card>
  );
};

CardCategoria.propTypes = {
  categoria: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    imageUrl: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    categoria: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardCategoria;
