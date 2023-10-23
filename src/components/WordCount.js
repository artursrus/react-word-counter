import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const calculateNumberOfWords = (words) => {
    const noSpecialcharacters = words.replace(/[^a-zA-Z ]/g, '');
    console.log(noSpecialcharacters)
    const stringArray = noSpecialcharacters.split(" ");

    const filteredArray = stringArray.filter((word) => {
        return word
    })
    return filteredArray.length;
}

export const WordCount = () => {

    const [wordCount, setWordCount] = useState(0);

    const handleChange = ({target}) => {
        
        const words = target.value;
        
        const numberofWords = calculateNumberOfWords(words);

        setWordCount(numberofWords);
    }

    return (
        <Stack gap={3}>
        <Form.Control
          as="textarea"
          placeholder="Add your words here..."
          rows={5}
          onChange={handleChange}
        />
        <Form.Text muted className="text-center fs-5">
          Word count: {wordCount}
        </Form.Text>
      </Stack>
    )
}