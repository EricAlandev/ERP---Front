import React, { useState } from "react"
import type { SearchUser } from "../../../types/UserTypes";
import { Box, Button, Grid, TextField } from "@mui/material";

type SearchPage = {
    send: (data: SearchUser) => void;
}

export default function SearchPage({send} : SearchPage){

    const [data, setData] = useState<SearchUser>({Email: "", IdUser : ""});


    const handleChanger = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setData((d) => (
            {...d, [name] : value}
        )) 
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        send(data);
    }

    return(
        <>
            <form
                onSubmit={handleSubmit}
                className="flex h-max items-center mt-3"
            >
                <Grid
                    container spacing={2} sx={{width: '100vw', maxWidth: '400px'}}
                >
                    <Grid size={{sm:6, md: 6}}>
                        <TextField
                            name="IdUser"
                            value={data.IdUser}
                            onChange={handleChanger}
                            placeholder="Type the IdUser"
                            fullWidth
                            className="inputTag"
                        />
                    </Grid>

                    <Grid size={{sm:6, md: 6}}>
                        <TextField
                            name="Email"
                            value={data.Email}
                            onChange={handleChanger}
                            placeholder="Type email"
                            fullWidth
                            className="inputTag"
                        />
                    </Grid>
                </Grid>

                <Button type="submit">
                    <Box
                        component="img"
                        src="/search/Search.png"
                    />
                </Button>
            </form>
        </>
    )
}