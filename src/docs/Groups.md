## Group Route Requests

#### 1. Group Create Post Endpoint

##### Request

`SERVER_URL/groups/`

Headers:
`Content-Type: "application/json"`

Request body:
| Name | Description | Type | Required |
| ----------- | ----------- | ---- | --- |
| time | Group time (o'clock)  | String | true |
| status | ["active", "waiting", "cancelled"] | String | true |
| lesson_duration | Group lesson_duration| INT | true | 
| course_duration | Group_duration| INT | true |
| schedule | schedule of group| Array | true |
| teacher_id | teacher_id| UUID | true |
| course_id | course_id| UUID | true | 


##### Response status codes

`201 - Group created successfully`
`400 - One of the arguments is incorrect`
`500 - Internal Server Error`


#### 2. Group Get Endpoint

##### Request

`SERVER_URL/groups/`

Headers:
`Content-Type: "application/json"`
`Authorization: "TOKEN"`

Permissions:
`Admin`

Query body:
| Name | Default | Type | Required |
| ----------- | ----------- | ---- | --- |
| limit | 15 | Number | false |
| offset | 0 | Number | false |

##### Response status codes



#### Success
 
    `200 - OK`
    `500 - Internal Server Error`

    {
       ok: true,
       message: "Succesfully created",
       data: {
           groups
       }
    }


 
 

#### 3. Group Update Put Endpoint

##### Request

`SERVER_URL/groups/:group_name`

Headers:
`Content-Type: "application/json"`

Request body:
| Name | Description | Type | Required |
| ----------- | ----------- | ---- | --- |
| time | Group time (o'clock)  | String | true |
| status | ["active", "waiting", "cancelled"] | String | true |
| lesson_duration | Group lesson_duration| INT | true | 
| course_duration | Group_duration| INT | true |
| schedule | schedule of group| Array | true |
| teacher_id | teacher_id| UUID | true |
| course_id | course_id| UUID | true | 

##### Response status codes

`200 - Group updated successfully`
`400 - name || description || price is incorrect`
`500 - Internal Server Error`