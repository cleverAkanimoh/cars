export const fetchWpAPI = async (
  query = "",
  { variables }: Record<string, any> = {}
) => {
  const headers = { "Content-Type": "application/json" };

  try {
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

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getAPIResponse = async (url: string) => {
  try {
    const response = await fetch(process.env.DOMAIN_NAME + url, {
      next: { revalidate: 100 },
    });

    return response.json();
  } catch (error) {
    console.error(
      "We are unable to process your request at the moment, please check your internet connection and try again"
    );
    return null;
  }
};
