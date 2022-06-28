import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';

interface HotelCardProps {
    name: string;
    city: string;
    country: string;
    imgUrl: string;
    dayPrice: number;
    totalPrice: number;
}

const HotelCard = ({ name, city, country, imgUrl, dayPrice, totalPrice }: HotelCardProps) => {
    return (
        <Card variant="outlined" sx={{ minWidth: '320px', maxWidth: '500px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                <Typography level="h2" fontSize="md" sx={{ alignSelf: 'flex-start' }}>
                    {name}
                </Typography>
                <Typography level="h2" fontSize="md" sx={{ alignSelf: 'flex-start' }}>
                    {city}, {country}
                </Typography>
            </Box>
            <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
                <img
                    src={imgUrl}
                    alt={name}
                />
            </AspectRatio>
            <Box sx={{ display: 'flex' }}>
                <div>
                    <Typography fontSize="lg" fontWeight="lg">
                        ${totalPrice} (${dayPrice} per day)
                    </Typography>
                </div>
                <Button
                    variant="solid"
                    size="sm"
                    color="primary"
                    aria-label="Explore Bahamas Islands"
                    sx={{ ml: 'auto', fontWeight: 600 }}
                >
                    Explore
                </Button>
            </Box>
        </Card>
    );
}

export default HotelCard;
