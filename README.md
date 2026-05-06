# Annex Technologies Assessment (JavaScript Implementation)

This repository contains JavaScript solutions for the Annex Technologies technical assessment.  
The goal is to demonstrate problem-solving ability, algorithmic thinking, and handling of real-world data scenarios.


## Contents

### 1. pth_factor.js
Finds the p-th smallest factor of a number using an optimized √n approach.

- Uses factor pairing to reduce time complexity from O(n) to O(√n)
- Efficiently handles large inputs (up to 10¹⁵)


### 2. top_students.js
Returns the top 3 students sorted by:
- Score (descending)
- ID (ascending for tie-breaking)

- Ensures deterministic ordering for equal scores


### 3. top_articles.js
Fetches and ranks articles from the HackerRank API.

- Handles pagination using `total_pages`
- Uses fallback logic (title → story_title)
- Treats null comments as 0
- Sorts by engagement (comments) and lexicographical order


## Design Decisions

- √n factorization used for performance optimization on large inputs
- Defensive checks added for null/invalid values
- API resilience handled with basic error safety
- Sorting logic designed to ensure deterministic outputs 


## Notes

- Code prioritizes readability and interview discussion clarity
- Includes basic edge-case handling
- Designed as a prototype before translation into C and C++


## Author

Cruzz John
