export const fetchWpAPI = async (
  query = "",
  { variables }: Record<string, any> = {}
) => {
  const headers = { "Content-Type": "application/json" }

  const request = await fetch(<string>process.env.WORDPRESS_API_URL, {
    headers,
    next: { revalidate: 20 },
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const response = await request.json();
  
  if (response.errors) {
    console.error(response.errors);
  }
  return response.data;
};

export const getAPIRequest = async (url: string) => {
  const request = await fetch(process.env.DOMAIN_NAME + url, {
    next: { revalidate: 100 },
  });

  if (!request.ok) {
    console.error(
      "We are unable to process your request at the moment, please check your internet connection and try again"
    );
  }
  return request.json();
};
