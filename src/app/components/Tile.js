// components/Tile.js
import React from 'react';
import { Card, CardContent } from '@mui/material';
import PropTypes from 'prop-types';

const Tile = ({ children, width, height }) => {
  return (
    <Card
      sx={{
        width: width || '100%',   // ancho predeterminado, pero se puede ajustar
        height: height || 'auto', // alto predeterminado, pero se puede ajustar
        borderRadius: '12px',     // todos los tiles tendrán el mismo border radius
        overflow: 'hidden',       // asegura que el contenido no salga del card
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent
        sx={{
          padding: '16px',        // espacio dentro del tile
          textOverflow: 'ellipsis',
          overflowWrap: 'break-word', // para que el texto se ajuste en el espacio
          overflow: 'hidden',      // asegura que el contenido no salga del card
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',    // centra contenido como imágenes y textos
          justifyContent: 'center',
          height: '100%',          // se adapta al alto definido del Card
          boxSizing: 'border-box', // asegura que padding se integre en el tamaño
        }}
      >
        {children}
      </CardContent>
    </Card>
  );
};

// PropTypes para que `width` y `height` sean opcionales y flexibles
Tile.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Tile;
