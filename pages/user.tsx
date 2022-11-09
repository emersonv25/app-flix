import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "../src/hooks/useAuth";

const User: NextPage = () => {
    const router = useRouter()

    const { user, signed, authLogout, authUpdateProfile } = useAuth();
    const [edit, setEdit] = useState(false);

    const [username, setUsername] = useState(user?.username ? user.username : '')
    const [fullName, setFullName] = useState(user?.fullName ? user.fullName : '')
    const [email, setEmail] = useState(user?.email ? user.email : '')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (!signed) {
            router.push('/login');
        }
    }, [signed, router])

    function reset() {
        setUsername(user?.username ? user.username : '')
        setFullName(user?.fullName ? user.fullName : '')
        setEmail(user?.email ? user.email : '')
        setPassword('')
        setEdit(false)
    }

    async function handleSubmit(event: any) {
        event.preventDefault();
        await authUpdateProfile(username, fullName, email, password).then(() => {
            setEdit(false)
        });
    }

    return (
        <Container maxWidth="xs" component={Paper}>
            <Box
                sx={{
                    padding: 2,
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Typography component="h1" variant="h5">
                    Painel do Usuário
                </Typography>
                <Box component='form' noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="username"
                        id="username"
                        label="Usuário"
                        value={username}
                        disabled={!edit}
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
                        disabled={!edit}
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
                        disabled={!edit}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        name="password"
                        id="password"
                        label="Nova Senha"
                        type="password"
                        value={password}
                        disabled={!edit}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {
                        !edit &&
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={() => setEdit(true)}
                        >
                            Editar
                        </Button>
                    }
                    {
                        edit &&
                        <>
                            <Button
                                type="submit"
                                fullWidth
                                color="success"
                                variant="contained"
                                sx={{ mt: 3, mb: 1 }}
                            >
                                Confirmar
                            </Button>
                            <Button
                                type="button"
                                fullWidth
                                color="error"
                                variant="outlined"
                                sx={{ mb: 2 }}
                                onClick={() => reset()}
                            >
                                Cancelar
                            </Button>
                        </>

                    }
                    <Button onClick={authLogout} color='inherit' fullWidth>
                        Deslogar
                    </Button>
                </Box>
            </Box>

        </Container>
    )

}



export default User