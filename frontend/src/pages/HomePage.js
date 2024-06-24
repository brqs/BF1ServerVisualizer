import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import { Grid, TextField, Button } from '@mui/material';
import CarouselComponent from '../components/common/CarouselComponent'; // 轮播图组件

function HomePage() {
    return (
        <div style={{ margin: '20px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={9} lg={8}>
                    {/* 轮播图 */}
                    <CarouselComponent />
                </Grid>

                <Grid item xs={12} sm={12} md={3} lg={4} style={{ margin: 'auto' }}>
                    {/* 查询框 */}
                    <TextField
                        fullWidth
                        label="玩家 ID"
                        variant="outlined"
                        placeholder="输入玩家 ID"
                    />
                    <Button variant="contained" color="primary" style={{ marginTop: '10px'}}>
                        查询
                    </Button>
                </Grid>

            </Grid>
        </div>
    );
}

export default HomePage;