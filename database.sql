CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
("url", "title", "description", "likes")
VALUES
('images/cool.jpg', 'Cool Cat', 'Photo of a cool cat at the beach.', 0),
('images/surprise.jpg', 'Surprise!', 'Photo of a cat that is surprised.', 0),
('images/cheese.jpg', 'Cheese!', 'Photo of a cat with a big cheesy grin.', 0);
('images/cool.jpg', 'Cool Cat', 'Photo of a cool cat at the beach.', 0),
('images/surprise.jpg', 'Surprise!', 'Photo of a cat that is surprised.', 0),
('images/cheese.jpg', 'Cheese!', 'Photo of a cat with a big cheesy grin.', 0);



SELECT * FROM "gallery";