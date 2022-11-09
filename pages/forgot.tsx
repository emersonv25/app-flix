import { Avatar, Button, Container, Icon, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NextPage } from "next";
import Link from "next/link";

const Forgot: NextPage = () => {
    const handleSubmit = (event: any) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
        });
      };
    return (
        <>
            <Container maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <Icon>lock-outlined-icon</Icon>
                    </Avatar>
                    <Typography component="h1" variant="h5">Entrar</Typography>
                    <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="email"
                            id="email"
                            label="E-mail"
                            autoFocus
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Recuperar senha
                        </Button>
                        <Button component={Link} href='/login' color='inherit' fullWidth>
                            Voltar para o Login
                        </Button>
                    </Box>
                </Box>

            </Container>
        </>
    )
}

export default Forgot