#!/bin/bash

# Input and output folder paths
input_folder="photolog/2024"
output_folder="photolog/2024-new"

# Create the new folder if it doesn't exist
mkdir -p "$output_folder"

# Get all the jpeg files in the input folder, sorted numerically
jpeg_files=($(ls "$input_folder"/*.jpeg | sort -n))

# Check if there are any jpeg files to process
if [ ${#jpeg_files[@]} -eq 0 ]; then
    echo "No .jpeg files found in $input_folder."
    exit 1
fi

# Get the total number of jpeg files
total_files=${#jpeg_files[@]}

# Loop through the jpeg files in reverse order and rename them
for ((i = 0; i < total_files; i++)); do
    # Calculate the new filename (reverse order)
    new_index=$((total_files - i))

    og_index=$((i + 1))

    # Get the original file and the new filename
    original_file="$input_folder/$og_index.jpeg"
    new_file="$output_folder/$new_index.jpeg"

    # Copy the file to the new folder with the new name
    cp "$original_file" "$new_file"
done

echo "JPEG files have been renamed in reverse order and copied to '$output_folder'."