let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i; // (http or https)://


// /: Delimiter that marks the beginning and end of the pattern.

// https?: Matches "http" or "https", with the "?" making the "s" character optional.

// :\/\/: Matches the "://" sequence of characters literally.

// (?:[-\w]+\.)?: A non-capturing group that matches a domain name prefix, consisting of one or more word characters or hyphens, followed by a period. The "?" makes this group optional.

// ([-\w]+): Matches the domain name itself, consisting of one or more word characters or hyphens, and captures it in a capturing group.

// \.\w+: Matches the top-level domain (TLD), consisting of a period followed by one or more word characters.

// (?:\.\w+)?: A non-capturing group that matches an optional subdomain, consisting of a period followed by one or more word characters.

// \/?: Matches an optional forward slash character, which can appear at the end of the URL path.

// .*: Matches any remaining characters in the URL path, if there are any.

// /i: Delimiter that marks the end of the pattern, with the "i" modifier making the pattern case-insensitive.