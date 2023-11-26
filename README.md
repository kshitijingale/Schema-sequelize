# 100x Microblogging Schema Design

## User (table name: users)
- id -- bigint serial primary key
- username -- string (unique 50 chars max)
- email -- string (unique)
- email verified at -- timestamp nullable
- display_name -- string (50 chars max)
- bio -- text

## Post (table name: posts)
  
   - id --  bigint serial primary key
   - content --  text (280 character limit)
   - posted at --  timestamp
   - user_id -- bigint foreign key
   - repost_id --  bigint foreign key nullable

## Like (table name: likes)
   - post_id -- bigint foreign key 
   - user_id -- bigint foreign key (unique)
   - liked_at -- timestamp

## Reply (table name: replies)
   - id -- bigint serial primary key 
   - content -- text (140 character max) 
   - created_at -- timestamp
   - post_id -- bigint foreign key 
   - user_id -- bigint foreign key

## Follow relation (table name: follows)
   - follower_id -- bigint foreign key 
   - user_id -- bigint foreign key 
   - followed_at -- timestamp

## Table description:

1. follows: This table captures the relations between users who follow each other. 
            The follower_id and user_id columns represent the user initiating
            the follow action and the user being followed, respectively.
    constraints: 
     - follower_id != following_id (prevents self following)
     - Ensure uniqueness: (follower_id, following_id)

2. likes: This table captures the likes on posts. The user_id identifies the user who liked the post, 
          the post_id identifies the liked post.

3. replies: This table captures the replies on posts. 100x Microblogging Schema Design

## Relationship between Models

- User - Post (ONE to MANY)
- Post - Like (ONE to MANY)
- Post - Reply (ONE to MANY)
  