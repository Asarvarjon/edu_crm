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



#### 4. Add Applicant To Group  Post Endpoint

##### Request

`SERVER_URL/groups/student`
`method = POST`

Headers:
`Content-Type: "application/json"`

Request body:
| Name | Description | Type | Required |
| ----------- | ----------- | ---- | --- | 
| applicant_id | teacher_id| UUID | true |
| group_id | course_id| UUID | true | 


##### Response status codes

`201 - Applicant added to course succesfully`
`400 - Applicand_id || group_id is invalid`
`500 - Internal Server Error`




#### 4. Delete Student From Group delete Endpoint

##### Request

`SERVER_URL/groups/student/:student_id`
`method = DELETE`

Headers:
`Content-Type: "application/json"`

Request body:
| Name | Description | Type | Required |
| ----------- | ----------- | ---- | --- | 
| student_id | ID of student(must be given from request.params)| UUID | true | 


##### Response status codes

`201 - Student deleted succesfully`
`400 - Student_id is invalid || Student not found`
`500 - Internal Server Error`



#### 2. Group Students GET Endpoint

##### Request

`SERVER_URL/groups/students/:group_name`

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
| group_name| Unique group name(must be given from request.params)| UUID | true | 


##### Response status codes  
 
    `200 - OK`
    `500 - Internal Server Error`

    {
       ok: true,
       message: "Groups_Students",
       data: {
           students
       }
    }
