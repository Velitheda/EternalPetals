json.array!(@flowers) do |flower|
  json.extract! flower, :id
  json.url flower_url(flower, format: :json)
end
