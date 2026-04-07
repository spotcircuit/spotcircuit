# Napkin Chart Integration Notes

## Chart Specifications

### ROI Timeline Chart
```javascript
{
  "type": "line",
  "data": {
    "labels": ["Month 3", "Month 6", "Month 9", "Month 12", "Month 15", "Month 18"],
    "datasets": [{
      "label": "ROI Timeline",
      "data": [-10, 0, 15, 35, 60, 100],
      "borderColor": "rgb(75, 192, 192)",
      "tension": 0.1
    }]
  },
  "options": {
    "scales": {
      "yAxes": [{
        "ticks": {}
      }]
    },
    "title": {
      "display": true,
      "fontSize": 16,
      "text": "Expected ROI Timeline for Scaling Investments"
    }
  }
}
```

### Scaling Metrics Chart
```javascript
{
  "type": "bar",
  "data": {
    "labels": ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
    "datasets": [
      {
        "label": "Revenue Growth",
        "data": [100, 250, 500, 1000, 2000],
        "backgroundColor": "#36A2EB"
      },
      {
        "label": "Customer Base",
        "data": [50, 150, 400, 800, 1500],
        "backgroundColor": "#FF6384"
      }
    ]
  },
  "options": {
    "title": {
      "display": true,
      "text": "Typical Business Growth Metrics Over 5 Years",
      "fontSize": 16
    },
    "scales": {
      "yAxes": [{
        "ticks": {
          "beginAtZero": true,
          "callback": "(value) => value + '%'"
        }
      }]
    }
  }
}
```

### Success Factors Chart
```javascript
{
  "type": "radar",
  "data": {
    "labels": [
      "Market Research",
      "Financial Planning",
      "Technology Adoption",
      "Team Building",
      "Marketing Strategy",
      "Customer Service"
    ],
    "datasets": [{
      "label": "Success Factors Impact",
      "data": [85, 90, 75, 80, 88, 92],
      "backgroundColor": "rgba(54, 162, 235, 0.2)",
      "borderColor": "rgb(54, 162, 235)",
      "pointBackgroundColor": "rgb(54, 162, 235)"
    }]
  },
  "options": {
    "title": {
      "display": true,
      "text": "Key Success Factors in Business Scaling",
      "fontSize": 16
    },
    "scale": {
      "ticks": {
        "beginAtZero": true,
        "max": 100
      }
    }
  }
}
```

## Integration Steps Needed

1. Set up hosting for HTML chart pages
   - Need a public URL to host the HTML files that render the charts
   - Could use Vercel, GitHub Pages, or another static hosting service

2. Update chart URLs
   - Once hosting is set up, update the chart URLs in enhance-content.ts
   - Use the full public URLs for the chart HTML pages

3. Test chart rendering
   - Verify charts load properly in Ghost blog posts
   - Check mobile responsiveness
   - Test chart interactivity

4. Error handling
   - Add fallback images in case charts fail to load
   - Add loading states while charts are being rendered
