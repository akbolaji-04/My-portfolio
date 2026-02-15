const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error("API URL is missing in .env.local");
}

export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  // Ensure endpoint starts with /
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;

  try {
    const res = await fetch(`${API_URL}${cleanEndpoint}`, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        ...(options.headers || {}),
      },
      // Cache 'no-store' ensures you always get fresh data (good for dev)
      cache: "no-store", 
      ...options,
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`API Error ${res.status} at ${endpoint}:`, errorText);
      throw new Error(`API Error: ${res.status} ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error("Network Error:", error);
    // Return empty arrays for list endpoints to prevent UI crashes
    if (endpoint === '/projects') return [] as unknown as T;
    throw error;
  }
}