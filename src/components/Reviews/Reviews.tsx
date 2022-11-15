import React, { useState } from "react"
import {
    Typography,
    Card,
    CardContent,
    TextField,
    TextareaAutosize,
    Button,
} from "@mui/material"
type Props = {}

type Review = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: "Ava",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quo natus numquam cum deleniti facilis exercitationem quae ipsam rem omnis nobis animi magnam facere error distinctio fuga tenetur excepturi quos?",
        },
        {
            name: "Stan",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quo natus numquam cum deleniti facilis exercitationem quae ipsam rem omnis nobis animi magnam facere error distinctio fuga tenetur excepturi quos?",
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)

    const [newReview, setNewReview] = useState<Review>({ name: "", text: "" })

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === "" || newReview.text === "") {
            alert("all fields are required")
        } else {
            setReviews((prevState: Review[]) => {
                return [...prevState, newReview]
            })
            setNewReview({
                name: "",
                text: "",
            })
        }
    }

    return (
        <>
            <Typography
                variant="h5"
                sx={{
                    textAlign: "center",
                    margin: "40px 0",
                }}
            >
                Reviews
            </Typography>
            {reviews.map(({ name, text }: Review, i) => (
                <Card
                    sx={{
                        margin: "20px 0",
                    }}
                    key={i}
                >
                    <CardContent>
                        <div>{name}</div>
                        <div>{text}</div>
                    </CardContent>
                </Card>
            ))}
            <form onSubmit={onSend}>
                <Typography variant="h5">Please leave a review</Typography>
                <div
                    style={{
                        margin: "15px 0",
                    }}
                >
                    <TextField
                        size="small"
                        label="Your name"
                        value={newReview.name}
                        onChange={handleChangeName}
                    />
                </div>
                <TextareaAutosize
                    minRows={5}
                    placeholder="Your message"
                    value={newReview.text}
                    onChange={handleChangeText}
                />
                <div>
                    <Button type="submit" variant="contained">
                        Send
                    </Button>
                </div>
            </form>
        </>
    )
}

export default Reviews
