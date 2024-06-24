const NewsData = [
    {
        "id": 0,
        "title": "Economic Growth Slows Down",
        "description": "The economic growth has slowed down in the last quarter due to global market fluctuations. Experts point to trade tensions and changes in consumer behavior as significant factors. Analysts are closely watching the situation to predict future trends and suggest that businesses may need to adjust their strategies to navigate these uncertain times.",
        "image": "https://images.unsplash.com/photo-1497035111255-8bc8464dc267?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
        "category": "Economy"
    },
    {
        "id": 1,
        "title": "New Technology Trends in 2024",
        "description": "A look at the most promising technology trends expected to dominate in 2024. From advancements in artificial intelligence and machine learning to the latest developments in blockchain technology, this article explores how these innovations will impact various industries. Experts believe that these trends will revolutionize the way we live and work, bringing about unprecedented changes.",
        "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category": "Technology"
    },
    {
        "id": 2,
        "title": "Healthcare Advances in Cancer Treatment",
        "description": "Recent advances in cancer treatment show promising results, offering new hope to patients and their families. Researchers have developed innovative therapies that target cancer cells more precisely, reducing side effects and improving outcomes. This article delves into the latest breakthroughs, including immunotherapy and personalized medicine, and discusses their potential to transform cancer care.",
        "image": "https://images.unsplash.com/photo-1584467735871-8e85353a8413?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category": "Health"
    },
    {
        "id": 3,
        "title": "Climate Change and Its Impact",
        "description": "An in-depth analysis of how climate change is affecting our planet. Rising temperatures, extreme weather events, and shifting ecosystems are just a few of the challenges we face. This article examines the scientific evidence, explores the consequences for biodiversity and human communities, and discusses potential solutions to mitigate the impact of climate change.",
        "image": "https://plus.unsplash.com/premium_photo-1664298311043-46b3814a511f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xpbWF0ZSUyMGNoYW5nZXxlbnwwfHwwfHx8MA%3D%3D",
        "category": "Environment"
    },
    {
        "id": 4,
        "title": "The Future of Remote Work",
        "description": "How remote work is evolving and what to expect in the coming years. As more companies embrace flexible work arrangements, new technologies and management practices are emerging to support remote teams. This article explores the benefits and challenges of remote work, and provides insights into how businesses can create effective remote work environments.",
        "image": "https://images.unsplash.com/photo-1584467735871-8e85353a8413?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category": "Business"
    },
    {
        "id": 5,
        "title": "Sports Highlights of the Week",
        "description": "A roundup of the most exciting sports events this week. From thrilling last-minute victories to record-breaking performances, this article captures the highlights of the week in sports. Fans will enjoy detailed coverage of their favorite teams and athletes, along with expert analysis and commentary on the most memorable moments.",
        "image": "https://images.unsplash.com/photo-1584467735871-8e85353a8413?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category": "Sports"
    },
    {
        "id": 6,
        "title": "Breakthroughs in Renewable Energy",
        "description": "Exciting breakthroughs in renewable energy technology are paving the way for a more sustainable future. This article discusses the latest innovations in solar, wind, and other renewable energy sources, highlighting their potential to reduce our dependence on fossil fuels. With a focus on both technological advancements and policy changes, readers will gain a comprehensive understanding of the future of energy.",
        "image": "https://images.unsplash.com/photo-1548613053-22087dd8edb8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category": "Environment"
    },
    {
        "id": 7,
        "title": "Innovations in Education Technology",
        "description": "Education technology is transforming the learning experience for students and teachers alike. From interactive digital textbooks to AI-driven personalized learning platforms, this article explores the latest innovations that are making education more accessible and effective. Discover how these technologies are being implemented in classrooms around the world and their impact on educational outcomes.",
        "image": "https://example.com/images/education_technology.jpg",
        "category": "Education"
    },
    {
        "id": 8,
        "title": "Cultural Festivals Around the World",
        "description": "Explore the vibrant cultural festivals taking place around the world. This article takes you on a journey through colorful celebrations, from the Rio Carnival in Brazil to the Diwali Festival in India. Learn about the history and significance of these events, and get a glimpse of the traditions and customs that make them unique. Perfect for cultural enthusiasts and travelers alike.",
        "image": "https://example.com/images/cultural_festivals.jpg",
        "category": "Culture"
    },
    {
        "id": 9,
        "title": "The Rise of Plant-Based Diets",
        "description": "Plant-based diets are gaining popularity as more people recognize their health and environmental benefits. This article explores the rise of plant-based eating, including the latest trends, popular recipes, and the science behind the diet's benefits. Learn how adopting a plant-based diet can contribute to a healthier lifestyle and a more sustainable planet.",
        "image": "https://example.com/images/plant_based_diet.jpg",
        "category": "Health"
    }
]

 const Categories = [
        {
            id:0,
            title:"Opinion"
        },{
            id:1,
            title:"Travel"
        },{
            id:2,
            title:"Entertainment"
        },{
            id:3,
            title:"Sports"
        },{
            id:4,
            title:"Health"
        },{
            id:5,
            title:"World"
        },{
            id:6,
            title:"Science"
        },{
            id:7,
            title:"Technology"
        },{
            id:8,
            title:"Business"
        },{
            id:9,
            title:"Politics"
        },{
            id:10,
            title:"Education"
        },{
            id:11,
            title:"Environment"
        },{
            id:12,
            title:"Fashion"
        },{
            id:13,
            title:"Food"
        },
    ]

export {NewsData , Categories};