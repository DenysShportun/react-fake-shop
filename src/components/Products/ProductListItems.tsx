import React from 'react'
import { Button, Card, CardActions, CardContent } from '@mui/material'

type Props = {}

const PoductListItem = (props: Props) => {
    return (
        <Card>
            <CardContent>
                <h4>iPhone X</h4>
                <p>This is desciption</p>
                <div>Type: phone</div>
                <div>Capacity: 64 Gb</div>
                <div>Price: 500$</div>
            </CardContent>
            <CardActions>
                <Button>Add to cat</Button>
            </CardActions>
        </Card>
    )
}

export default PoductListItem
