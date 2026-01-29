const rateLimitMap = new Map();

 const rateLimiter = (req, res, next) => {
  const ip = req.ip;
  const now = Date.now();

  const windowMs = 60 * 1000; // 1 minute
  const limit = 100;

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, []);
  }

  const timestamps = rateLimitMap.get(ip).filter(ts => now - ts < windowMs);
  timestamps.push(now);

  rateLimitMap.set(ip, timestamps);

  if (timestamps.length > limit) {
    return res.status(429).json({ message: "Too many requests" });
  }

  next();
};

export default rateLimiter;
