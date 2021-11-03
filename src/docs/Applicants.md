## Applicant Route Requests

#### 1. Applicant Create Post Endpoint

##### Request

`SERVER_URL/applicants/`

Headers:
`Content-Type: "application/json"`

Request body:
| Name | Description | Type | Required |
| ----------- | ----------- | ---- | --- |
| name | Applicant name  | String | true |
| gender | Applicant gender ["male" or "female"] | String | true |
| description | Applicant Description| String | true | 
| birth_date | Applicant birth_date| DATE | true |
| phone | Applicant phone| String | true |
| source| Applicant source| String | true |
| course_id| Applicant course_id(which course want to join)| UUID | true | 



##### Response status codes

`201 - Applicant created successfully`
`400 - name || description || birth_date || phone  is incorrect`
`500 - Internal Server Error`


#### 2. Course Get Endpoint

##### Request

`SERVER_URL/applicants/`

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


 

#### 4. Applicant Update Put Endpoint

##### Request

`SERVER_URL/applicants/:applicant_id`

Headers:
`Content-Type: "application/json"`

Request body:
| Name | Description | Type | Required |
| ----------- | ----------- | ---- | --- |
| name | Applicant name  | String | true |
| gender | Applicant gender ["male" or "female"] | String | true |
| description | Applicant Description| String | true | 
| birth_date | Applicant birth_date| DATE | true |
| phone | Applicant phone| String | true |
| source| Applicant source| String | true |
| course_id| Applicant course_id(which course want to join)| UUID | true | 
| status| Applicant status| String | true | 


##### Response status codes

`200 - Applicant updated successfully`
`400 - name || description || birth_date || phone  is incorrect`
`500 - Internal Server Error`