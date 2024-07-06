'use client'
import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

interface TagsInputProps {
  value: string[];
  onChange: (tags: string[]) => void;
}

const TagsInput: React.FC<TagsInputProps> = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState<string>("");

  // Function to delete a tag
  const handleDelete = (tagToDelete: string) => {
    // Remove the tag to delete and update the tags list
    const newTags = value.filter(tag => tag !== tagToDelete);
    onChange(newTags); // Update the parent component with the new tags list
  }

  // Function to handle adding a new tag
  const handleAddition = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {  // Check if the key pressed is Enter or Comma
      e.preventDefault();  // Prevent default behavior of the key press
      addTag();  // Call addTag function
    }
  }

  // Function to add a new tag
  const addTag = () => {
    const newTag = inputValue.trim();  // Get the trimmed input value
    if (newTag && !value.includes(newTag)) {  // Check if the tag is not empty and not already present
      const newTags = [...value, newTag];  // Create a new array with the new tag
      onChange(newTags);  // Notify the parent component with the new tags list
      setInputValue("");  // Clear the input field
    }
  }

  const handleAddTag = () => {
    addTag();  // Call addTag function on button click
  }

  // Function to handle changes in the input field
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);  // Update the local state with the new input value
  }

  return (
    <div>
      {/* Display the tags */}
      <div className="flex flex-wrap gap-2 mb-2">
        {value.map((tag, index) => (
          <div key={index} className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1">
            <span>{tag}</span>
            <button
              type="button"
              className="ml-2 text-red-500"
              onClick={() => handleDelete(tag)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
      {/* Input field for adding new tags */}
      <div className='flex w-full relative'>
        <input
            type="text"
            value={inputValue}
            onChange={handleChange}  // Handle input changes
            onKeyDown={handleAddition}  // Handle Enter or Comma key presses
            placeholder="Press enter, comma, or click Add Tag to add tags"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary-300"
        />
        <div
          className='absolute right-0 text-white cursor-pointer top-1/2 -translate-y-1/2 bg-primary-700 h-full leading-[40px] px-4'
          onClick={handleAddTag}
        >
          Add Tag
        </div>
      </div>
    </div>
  );
}

export default TagsInput;
