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
  
  const headers: HeadersInit = {
    "Accept": "application/json",
    ...(options.headers || {}),
  };

  // ⚠️ CRITICAL FIX: 
  // If we are sending a File (FormData), DO NOT force "Content-Type: application/json".
  // The browser will automatically set the correct "multipart/form-data" header for us.
  if (!(options.body instanceof FormData)) {
    (headers as Record<string, string>)["Content-Type"] = "application/json";
  }

  try {
    const res = await fetch(`${API_URL}${cleanEndpoint}`, {
      ...options,
      headers,
      cache: options.next ? undefined : (options.cache || "no-store"),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`API Error ${res.status} at ${endpoint}:`, errorText);
      throw new Error(`API Error: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Network Error:", error);
    throw error;
  }
}