
const allStories = [
    {
      id: 0,
      author: "",
      imageUrl: "https://images.pexels.com/photos/1222561/pexels-photo-1222561.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  
    {
      id: 1,
      author: "",
      imageUrl: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  
    {
      id: 2,
      author: "",
      imageUrl: "https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  
    {
      id: 3,
      author: "",
      imageUrl: "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600",
    },
  
    {
      id: 4,
      author: "",
      imageUrl: "https://images.pexels.com/photos/954046/pexels-photo-954046.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  
    {
      id: 5,
      author: "",
      imageUrl: "https://images.pexels.com/photos/1640572/pexels-photo-1640572.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  
    {
      id: 6,
      author: "",
      imageUrl: "https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  
    {
      id: 7,
      author: "",
      imageUrl: "https://images.pexels.com/photos/1546898/pexels-photo-1546898.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  
    {
      id: 8,
      author: "",
      imageUrl: "https://images.pexels.com/photos/715134/pexels-photo-715134.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  
    {
      id: 9,
      author: "",
      imageUrl: "https://images.pexels.com/photos/2839837/pexels-photo-2839837.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  
    {
      id: 9,
      author: "",
      imageUrl: "https://images.pexels.com/photos/2506639/pexels-photo-2506639.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  
    {
      id: 9,
      author: "",
      imageUrl: "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  
    {
      id: 9,
      author: "",
      imageUrl: "https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg?auto=compress&cs=tinysr",
    },
  ];
  
  const stories = document.querySelector(".stories");
  const storiesFullView = document.querySelector(".stories-full-view");
  const closeBtn = document.querySelector(".close-btn");
  const storyImageFull = document.querySelector(".stories-full-view .story img");
  const storyAuthorFull = document.querySelector(
    ".stories-full-view .story .author"
  );
  const nextBtn = document.querySelector(".stories-container .next-btn");
  const previousBtn = document.querySelector(".stories-container .previous-btn");
  const storiesContent = document.querySelector(".stories-container .content");
  const nextBtnFull = document.querySelector(".stories-full-view .next-btn");
  const previousBtnFull = document.querySelector(
    ".stories-full-view .previous-btn"
  );
  
  let currentActive = 0;
  
  const createStories = () => {
    allStories.forEach((s, i) => {
      const story = document.createElement("div");
      story.classList.add("story");
      const img = document.createElement("img");
      img.src = s.imageUrl;
      const author = document.createElement("div");
      author.classList.add("author");
      author.innerHTML = s.author;
  
      story.appendChild(img);
      story.appendChild(author);
  
      stories.appendChild(story);
  
      story.addEventListener("click", () => {
        showFullView(i);
      });
    });
  };
  
  createStories();
  
  const showFullView = (index) => {
    currentActive = index;
    updateFullView();
    storiesFullView.classList.add("active");
  };
  
  closeBtn.addEventListener("click", () => {
    storiesFullView.classList.remove("active");
  });
  
  const updateFullView = () => {
    storyImageFull.src = allStories[currentActive].imageUrl;
    storyAuthorFull.innerHTML = allStories[currentActive].author;
  };
  
  nextBtn.addEventListener("click", () => {
    storiesContent.scrollLeft += 300;
  });
  
  previousBtn.addEventListener("click", () => {
    storiesContent.scrollLeft -= 300;
  });
  
  storiesContent.addEventListener("scroll", () => {
    if (storiesContent.scrollLeft <= 24) {
      previousBtn.classList.remove("active");
    } else {
      previousBtn.classList.add("active");
    }
  
    let maxScrollValue =
      storiesContent.scrollWidth - storiesContent.clientWidth - 24;
  
    if (storiesContent.scrollLeft >= maxScrollValue) {
      nextBtn.classList.remove("active");
    } else {
      nextBtn.classList.add("active");
    }
  });
  
  nextBtnFull.addEventListener("click", () => {
    if (currentActive >= allStories.length - 1) {
      return;
    }
    currentActive++;
    updateFullView();
  });
  
  previousBtnFull.addEventListener("click", () => {
    if (currentActive <= 0) {
      return;
    }
    currentActive--;
    updateFullView();
  });