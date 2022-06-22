json.extract! comment, :id, :content, :user_id, :user_username, :created_at, :updated_at
json.url comment_url(comment, format: :json)
