import { Avatar, Button, Checkbox, Container, FormControlLabel, Icon, Link, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NextPage } from "next";
import { useState } from "react";
import { useAuth } from "../src/hooks/useAuth";

const Register: NextPage = () => {

    const [username, setUsername] = useState('')
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {authRegister} = useAuth();

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        //const data = new FormData(event.currentTarget);
        await authRegister(username, fullName, email, password);
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
                    <Typography component="h1" variant="h5">
                        Registrar-se
                    </Typography>
                    <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="username"
                            id="username"
                            label="Usuário"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="fullname"
                            id="fullname"
                            label="Nome Completo"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="email"
                            id="email"
                            label="E-mail"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Senha"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" />}
                            label="Lembrar senha"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Cadastrar
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

export default Register