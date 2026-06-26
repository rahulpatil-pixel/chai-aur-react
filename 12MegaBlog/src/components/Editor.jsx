import React from 'react'
import { Editor } from "@tinymce/tinymce-react";

function RTE({ control, name, defaultValue = "" }) {
    return (
        <Editor
            apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
            initialValue={defaultValue}
            init={{
                height: 500,
                menubar: true,
                plugins: [
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "preview",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "table",
                    "help",
                    "wordcount"
                ],
                toolbar:
                    "undo redo | blocks | bold italic | " +
                    "alignleft aligncenter alignright | " +
                    "bullist numlist | code"
            }}
        />
    );
}

export default RTE;